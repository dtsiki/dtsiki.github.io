export class AnimationQueue {
  private promise: Promise<void> = Promise.resolve();
  private isAborted = false;

  /**
   * Добавляет анимацию в очередь
   * @param element - DOM-элемент
   * @param animationClass - CSS-класс с animation
   * @param removeAfterEnd - удалить класс после анимации
   */
  add(element: HTMLElement | null, animationClass: string, removeAfterEnd = false): this {
    if (!element || this.isAborted) return this;

    this.promise = this.promise.then(
      () =>
        new Promise<void>((resolve) => {
          const onAnimationEnd = () => {
            if (removeAfterEnd) element.classList.remove(animationClass);
            resolve();
          };

          // снять предыдущий анимационный класс, если он был
          const prev = element.dataset.animationClass;
          if (prev && prev !== animationClass) {
            element.classList.remove(prev);
          }
          element.classList.remove(animationClass);

          void element.offsetWidth;

          element.dataset.animationClass = animationClass;
          element.classList.add(animationClass);
          element.addEventListener('animationend', onAnimationEnd, { once: true });
        })
    );

    return this;
  }

  addWithDelay(
    element: HTMLElement | null,
    animationClass: string,
    delayMs: number,
    removeAfterEnd: boolean = false
  ): this {
    if (!element || this.isAborted) {
      return this;
    }

    this.promise = this.promise.then(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            let done = false;
            const finish = () => {
              if (done) return;
              done = true;
              if (removeAfterEnd) element.classList.remove(animationClass);
              resolve();
            };

            const onAnimationEnd = () => {
              if (removeAfterEnd) {
                element.classList.remove(animationClass);
              }

              resolve();
            };

            element.classList.remove(animationClass);
            void element.offsetWidth;
            element.classList.add(animationClass);

            element.addEventListener('animationend', onAnimationEnd, { once: true });

            const dur = parseFloat(getComputedStyle(element).animationDuration) || 1;
            setTimeout(finish, dur * 1000 + 100);
          }, delayMs);
        })
    );

    return this;
  }

  addCallback(callback: () => void | Promise<void>): this {
    this.promise = this.promise.then(async () => {
      await callback();
    });

    return this;
  }

  abort(): void {
    this.isAborted = true;
    this.promise = Promise.resolve();
  }

  async wait(): Promise<void> {
    return this.promise;
  }
}

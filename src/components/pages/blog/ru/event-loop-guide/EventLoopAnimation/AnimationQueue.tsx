export class AnimationQueue {
  private promise: Promise<void> = Promise.resolve();
  private isAborted = false;

  /**
   * Добавляет анимацию в очередь
   * @param element - DOM-элемент
   * @param animationClass - CSS-класс с animation
   * @param removeAfterEnd - удалить класс после анимации
   */
  add(element: HTMLElement | null, animationClass: string, removeAfterEnd: boolean = false): this {
    if (!element || this.isAborted) {
      return this;
    }

    this.promise = this.promise.then(
      () =>
        new Promise<void>((resolve) => {
          const onAnimationEnd = () => {
            if (removeAfterEnd) {
              element.classList.remove(animationClass);
            }

            resolve();
          };

          element.classList.add(animationClass);
          element.addEventListener('animationend', onAnimationEnd, {
            once: true,
          });
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
            if (!element || this.isAborted) {
              resolve();
              return;
            }

            const onAnimationEnd = () => {
              if (removeAfterEnd) {
                element.classList.remove(animationClass);
              }

              resolve();
            };

            element.classList.add(animationClass);
            element.addEventListener('animationend', onAnimationEnd, {
              once: true,
            });
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

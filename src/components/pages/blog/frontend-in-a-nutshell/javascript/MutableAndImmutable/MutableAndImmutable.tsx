import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';

const MutableAndImmutable = (): ReactElement => {
  return (
    <Accordion title='Mutable and immutable'>
      <p>
        A mutable object is an object whose state can be modified after it is created.
        An immutable object is an object whose state cannot be changed once the object is created.
      </p>
      <p>
        In JavaScript only <code>objects</code> and <code>arrays</code> are mutable, primitive data types are immutable.
        Let&#39;s break it down.
      </p>
      <p className='spacer bottom medium'>
        There are two data types in JavaScript: primitive types (<code>string</code>, <code>number</code>, <code>boolean</code>, etc) and non-primitive or reference data type (<code>object</code>).
        Primitive types are stored on the <code>stack</code> memory.
        When storing a Primitive type in memory, it adds an element to the top of the stack with this value of the newly created variable, in other words last in, first out (LIFO).
        When we create a new variable and assigned the first one to the new one, it adds a new element on top of the stack with the value of the new variable.
        Reference types are stored on the <code>heap</code>.
        It, indifference from the <code>stack</code>, has no order of how to store the data.
        When storing a reference type in memory, it adds a new element to the top of the stack when its value is a reference to the address of the object that has been stored on the heap.
      </p>
      <p>
        Each time a primitive type is created, a new element gets into the top of the stack and stores the data of that variable.
        On the other hand, when create a reference data type, a new element gets into the top of the stack, but this time it stores its poitner to the address location of the object in the heap.
        Then, when we assign the created object to a new object variable a new element gets into the top of the stack but with the same pointer to the first object.
      </p>
    </Accordion>
  );
};

export default MutableAndImmutable;

import React from 'react';

function Blog() {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center text-cyan-500 mb-12'> Our Blogs</h2>
            <div className='bg-white p-8 mb-12 rounded-xl'>

                <div className="border-2 rounded-xl p-2 mb-4">
                    <h3 className='text-2xl font-bold text-cyan-800'>*** The differences between uncontrolled and controlled components.</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>
                        <p>
                            Uncontrolled components : is also known as uncontrolled inputs, are components that manage their own state internally without being controlled by a parent or external entity. They typically store their state locally and update it independently. In this approach, the component directly interacts with the DOM (Document Object Model) and uses DOM events to handle user input.
                        </p>
                        <p>
                            Controlled components : On the other hand, are components whose state and behavior are controlled by a parent or an external entity. The parent component owns the state of the controlled component and passes it down as props. The controlled component notifies the parent about any user interactions through event callbacks. The parent component then decides how to update the state and passes the new state back to the controlled component.
                        </p>
                    </div>
                </div>
                <div className="border-2 rounded-xl p-2 mb-4">
                    <h3 className='text-2xl font-bold text-cyan-800'>*** The difference between nodejs and express js.</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>

                        <p>
                            Node.js is a runtime environment that enables server-side JavaScript execution, while Express.js is a web application framework built on top of Node.js. Node.js provides the core capabilities for server-side development, whereas Express.js adds structure, convenience, and additional features to build web applications and APIs. Express.js simplifies common web development tasks and provides a flexible and minimalist framework for building server-side applications using Node.js.
                        </p>
                    </div>
                </div>

                <div className="border-2 rounded-xl p-2 mb-4">
                    <h3 className='text-2xl font-bold text-cyan-800'>What is a custom hook, and why will you create a custom hook?</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>
                        <p>
                            n React, a custom hook is a JavaScript function that allows you to reuse stateful logic and share it across multiple components. It follows the naming convention of starting with the word "use" to indicate that it's a hook. <br />

                            Custom hooks provide a way to extract and organize logic that is used by multiple components without the need for duplicating code or relying on higher-order components or render props. They encapsulate reusable behavior, making it easier to manage and test the logic independently.
                        </p>
                        <p>
                            Reusability: If you find yourself using the same logic in multiple components, creating a custom hook allows you to encapsulate that logic into a single place and reuse it wherever needed. This promotes code reuse and avoids code duplication. <br />

                            Abstraction: Custom hooks provide a level of abstraction, allowing you to hide complex or repetitive implementation details behind a simple hook interface. This can make your component code cleaner and easier to understand. <br />

                            Separation of Concerns: Custom hooks enable you to separate concerns by abstracting away business logic or side effects from the components themselves. This promotes a cleaner component structure and improves the maintainability of your codebase. <br />

                            Stateful Logic: Custom hooks can encapsulate stateful logic, such as managing form state, handling timers, or interacting with external APIs. By extracting this logic into a custom hook, you can reuse it across different components, making it easier to manage and test. <br />

                            Testing: Custom hooks can be independently unit tested, providing a focused and isolated testing environment for the logic they encapsulate. This allows you to write more robust tests and ensures that the hook's behavior is consistent across components.
                        </p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Blog;

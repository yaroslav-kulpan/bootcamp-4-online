import React from 'react';

const App = () => {
    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-4 m-4 w-full lg:w-3/4 lg:max-w-2xl">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List:</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                               placeholder="Add Todo"/>
                        <button
                            className="flex-no-shrink p-2 border-2 rounded text-blue-500 border-blue-400 hover:text-white hover:bg-blue-400">
                            Add
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex mb-4 items-center">
                        <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                        <button
                            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-400">Done
                        </button>
                        <button
                            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove
                        </button>
                    </div>
                    <div className="flex mb-4 items-center">
                        <p className="w-full line-through text-green">Submit Todo App Component to Tailwind
                            Components</p>
                        <button
                            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-gray-500 hover:bg-gray-500">Not
                            Done
                        </button>
                        <button
                            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
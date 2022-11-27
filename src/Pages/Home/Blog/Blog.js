import React from 'react';

const Blog = () => {
    return (
        <section className=" text-slate-700">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Few Questions</h2>
		{/* <p className="mt-4 mb-8 dark:text-slate-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p> */}
		<div className="space-y-4 my-8">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-500">There are four main types of state you need to properly manage in your React apps: <br />

                       1. Local state <br />
                       2. Global state <br />
                       3. Server state <br />
                       4. URL state <br />
                       <strong>Local (UI) state –</strong> Local state is data we manage in one or another component. <br />

                        Local state is most often managed in React using the useState hook. <br />

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />

                        <strong>Global (UI) state –</strong> Global state is data we manage across multiple components. <br />

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />

                        <strong>Server state –</strong> Data that comes from an external server that must be integrated with our UI state. <br />

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />

                        <strong>URL state –</strong> Data that exists on our URLs, including the pathname and query parameters. <br />

                        URL state is often missing as a category of state, but it is an important one. <br />
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                       </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-500">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <strong>[[Prototype]]</strong> of an object, we use Object.getPrototypeOf and Object.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-500">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. <br />
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />
                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Difference between React vs. Angular vs. Vue?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-slate-500"><strong>Key Differences Between Angular.js, React.js and Vue.js</strong> <br />
                <strong>Architecture</strong> <br />
                Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming: <br />
                <ul>
                    <li> &#8226; Templates based on HTML;</li>
                    <li> &#8226; Ajax requests; Routing;</li>
                    <li> &#8226; Encapsulation of CSS components;</li>
                    <li> &#8226; Components testing utilities;</li>
                    <li> &#8226; Opportunities to create forms, etc.</li>
                </ul>
                React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. The following features are provided: <br />

                &#8226; As an add-on to JavaScript, the JSX language, which is similar to XML, is used instead of templates; <br />

                &#8226; No introduction of dependencies; <br />

                &#8226; Ajax requests; <br />

                Vue.js is a library that allows you to create interactive web interfaces. Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. It uses two-way data bindings to attach the View and the Model. Directives and Filters abstract away the actual DOM operations and output formatting. <br />

                <strong>Data Binding</strong> <br />
                Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. The interface element changes as the model’s state changes, which is why two-way data binding is used. <br />

                React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. If you change the interface element, the state of the model stays the same. <br />

                As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. This implies that all Vue.js templates are fundamentally legal, parsable HTML with a few extra features. Remember this because Vue templates are fundamentally different from string-based templates. <br />

                <strong>Mobile solutions</strong> <br />
                Each one of the three compared web development frameworks offers mobile solutions for apps development. <br />

                When it comes to Angular, this is the Ionic framework, which makes use of Angular’s Cordova container. You download the app, which is a web application running within a web browser. <br />

                React.js doesn’t have a similar framework. React Native is a platform for creating actual native mobile applications. <br />

                Vue has announced its support for the Alibaba Group’s Weex project, which is a cross-platform UI framework. Weex allows you to develop browser components as well as iOS and Android apps using the same Vue syntax. <br />

                <strong>Ease of learning</strong> <br />
                In the case of React.js, you need to learn JSX first, which is not a problem since it’s quite simple. Then you need to go through the routing library (react-router v4, for example) and then the state management libraries (Redux or MobX). <br />

                In the case of Angular, there are way more steps to make and information to learn. From basic terms (directives, modules, decorators, components, services, dependency inputs, pipes, and templates), this is followed by topics as change detection, zones, AoT compilation, and Rx.js. <br />

                And in the case of Vue.js, the fundamental features may be implemented in the first web applications in the least amount of time. Vue is simpler to understand than Angular or React since it is more adaptable. Furthermore, Vue’s functionality, such as the use of components, overlaps with that of Angular and React. Vue.js’s simplicity and adaptability, on the other hand, have a drawback: it enables poor code that is tough to debug and test. <br />

                <strong>Syntax</strong> <br />
                Angular is written in TypeScript, which means you need some time to learn it to work with this framework. <br />

                React uses JSX and native Javascript developers are familiar with it. The training period is easier and does not require that much preparation. <br />

                Vue.js makes use of an HTML-based template syntax that allows you to link the displayed DOM to the data of the base element instance declaratively. All Vue.js templates are valid HTML that can be read by HTML analyzers and browsers that follow the standard. <br />

                <strong>Performance</strong> <br />
                To capture all changes to the DOM, Angular.js creates a watcher for each binding. Every time the view updates, the new values compare with the old ones. This can end up in poorer performance in large mobile applications. <br />

                Because React uses a virtual DOM, when the view is modified, the new DOM compares it to the virtual DOM and changes accordingly. <br />

                Vue.js has better performance thanks to the virtual DOM, which is useful for complicated programs. It may be as little as 20KB while maintaining its speed and versatility, allowing it to achieve considerably better performance than competing frameworks. <br />

                </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default Blog;
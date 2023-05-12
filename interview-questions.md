# ASSESSMENT 3: Interview Practice Questions

# 1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
    JSX is syntactic sugar for writing HTML, which makes it easier to connect JavaScript files to HTML.
    I remember that it stands for JavaScript XML.
    A syntax difference is the usage of camelCase in JavaScript while it's not in HTML. (I forgot the HTML equivalent)

Researched answer:
    JSX is a syntax extension for JavaScript that allows HTML-like code in their JavaScript codes that was originally developed to use with REACT.
    An example of syntax difference between HTML and JSX is when defining CSS class. 
    In HTML it is often done like <div class="my-class"></div>
    In JSX it is done like <div className="my-class"></div>
    In JavaScript "class" is often a reserved keyword so using it as an attribute name in JSX could lead to syntax errors.

# 2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:
    A package manager that modifies JavaScript files.

Researched answer:
    Yarn is a package manager developed by Facebook for JavaScript, similar to npm (Node Package Manager). It was created in response to performance issues with npm, and provides a faster, more reliable and secure way of installing and managing packages, with better caching and parallelism.

# 3. What is a React component?

Your answer:
    Group of components that encapsulates common functions of a page

Researched answer:
    A modular, reusable piece of code that represents a part of a user interface that can be considered as a building block of React applications. It makes it easier to develop and maintain complex UIs and provides a clear separation of concerns, making it easier to reason about and test individual parts of an application. It is often responsible for rendering the UI, managing their own state, and responding to user input or other events.

# 4. What is the difference between state values and props in React?

Your answer:
    Props are static and state is more dynamic

Researched answer:
    State values are internal and mutable, while props are external and read-only. State is used to store and manage component-specific data, while props are used to pass data and behavior between components.

# 5. What is the DOM?

Your answer:
    The document object model and is an interface for something

Researched answer:
    a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects, and that way, programming languages can interact with the page. The DOM is often used in web development for scripting with languages such as JavaScript to dynamically update the content and style of web pages.

# 6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:
    their display style? One of them is used for bigger groups while the other is for smaller groups of objects.

Researched answer:
    The div tag is a block-level element, which means it starts on a new line and takes up the full width available, and typically used to group larger areas of content, such as sections or pages. div elements are often styled using CSS to provide visual structure to a web page.
    The span tag is an inline-level element, which means it does not start on a new line and only takes up the width of its content, and is typically used to group smaller parts of content within a line of text, such as a single word or a short phrase. Span elements are also often styled using CSS, usually to add emphasis to specific parts of text or to provide a unique style.
    

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
    a programming paradigm that organizes code into objects that interact with each other. Objects contain data in the form of attributes and methods that define what the object can do and provides a way to create reusable and modular code, which makes it easier to maintain and update large code bases.

2. Ruby:
    a dynamic programming language known for its simplicity and productivity that is commonly used to write Ruby on Rails applications.

3. Implicit Return:
   a feature in Ruby that allows a method to return the value of the last expression evaluated without using the return keyword. This means that in a method definition, the last evaluated expression is automatically returned as the method's value.

4. Ruby blocks:
    chunks of code that can be passed to methods like arguments, often defined with curly braces {} or with the do and end keywords, and used for iterating over collections, implementing custom algorithms, etc.

5. Ruby hashes:
    a data structure (something similar to dictionaries or associative arrays in other programming languages)that stores key-value pairs. Hashes are defined with curly braces {}, and keys and values are separated by the => symbol.

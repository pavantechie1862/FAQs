import Faqs from './components/Faqs'

import './App.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is Object-Oriented Programming (OOP)?',
    answerText:
      'Object-Oriented Programming is a programming paradigm that focuses on the creation and manipulation of objects. It emphasizes the concepts of encapsulation, inheritance, polymorphism, and abstraction. In OOP, objects are instances of classes that encapsulate data (attributes) and behavior (methods).',
  },
  {
    id: 1,
    questionText: 'What is the difference between a class and an object?',
    answerText:
      'A class is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of the class will possess. An object, on the other hand, is an instance of a class. It represents a specific entity that has its own unique state and behavior.',
  },
  {
    id: 2,
    questionText: 'What is the difference between inheritance and composition?',
    answerText:
      'Inheritance and composition are two ways to establish relationships between classes.Inheritance: Inheritance allows a class (subclass) to inherit attributes and methods from another class (superclass). It creates an (is-a) relationship between the classes. The subclass can extend or override the inherited behavior.Composition: Composition involves creating objects of one class within another class. It establishes a (has-a) relationship between the classes. The class containing the object instances can use their behavior or delegate tasks to them.',
  },

  {
    id: 3,
    questionText: 'What is method overriding in Python?',
    answerText:
      'Method overriding is a concept in OOP where a subclass provides its own implementation of a method that is already defined in its superclass. The subclass overrides the behavior of the superclass method with its own implementation. To override a method, the subclass must define a method with the same name and signature as the superclass method.',
  },
  {
    id: 4,
    questionText: 'What is Object-Oriented Programming (OOP)?',
    answerText:
      'Object-Oriented Programming is a programming paradigm that focuses on the creation and manipulation of objects. It emphasizes the concepts of encapsulation, inheritance, polymorphism, and abstraction. In OOP, objects are instances of classes that encapsulate data (attributes) and behavior (methods).',
  },
  {
    id: 5,
    questionText: 'What is the difference between a class and an object?',
    answerText:
      'A class is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of the class will possess. An object, on the other hand, is an instance of a class. It represents a specific entity that has its own unique state and behavior.',
  },
  {
    id: 6,
    questionText: 'What is Object-Oriented Programming (OOP)?',
    answerText:
      'Object-Oriented Programming is a programming paradigm that focuses on the creation and manipulation of objects. It emphasizes the concepts of encapsulation, inheritance, polymorphism, and abstraction. In OOP, objects are instances of classes that encapsulate data (attributes) and behavior (methods).',
  },
  {
    id: 7,
    questionText: 'What is the difference between a class and an object?',
    answerText:
      'A class is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of the class will possess. An object, on the other hand, is an instance of a class. It represents a specific entity that has its own unique state and behavior.',
  },
]

const App = () => <Faqs faqsList={faqsList} />

export default App

# react-mobx-boilerplate
A boilerplate for ReactJS with MobX using a MVVM pattern and typedi for dependency injection.

## Why MobX?
Observable data is simple to grasp and annotations make for readable code. Redux requires quite a bit of boilerplate and 
prototyping feels slow.

## Why MVVM?
The Model-view-viewmodel pattern provides clean guardrails for organizing frontend code and is intuitive in the 
context of a React/MobX project. View logic lives in the view, state logic lives in the viewmodel, and services act 
as simple wrappers for API calls that can be injected via typedi.

## Other Considerations
This boilerplate uses react context to create a global store of viewmodels. You could certainly use MobX for this 
if you prefer.
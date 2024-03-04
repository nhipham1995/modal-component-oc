# modal-component-oc

![Static Badge](https://img.shields.io/badge/npm_package-1.1.9-blue)

A modal in the same React.js component. It can be used as a modal, a toast or show a notification. It is **slightly customizable**.

### Top technologies

![Static Badge](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=61DBFB&labelColor=303030)

![Static Badge](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=F0DB4F&labelColor=323330) ![Static Badge](https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=javascript&logoColor=007acc&labelColor=323330) ![Static Badge](https://img.shields.io/badge/NodeJS-68A063?style=for-the-badge&logo=javascript&logoColor=68A063&labelColor=303030)

## Installation

Install using npm:

```sh

npm install --save modal-component-oc

```

## Usage

[React.js](http://facebook.github.io/react/) (version: 18.2.0) and [React Dom](http://facebook.github.io/react/) (version: 18.2.0) are peer dependencies for react-datetime. As well as [FontAwesome] (https://fontawesome.com/)(version: 6.5.1) if you want to use the `isCloseBtn` prop set true. These dependencies are not installed along with modal-component-oc automatically, but your project needs to have them installed in order to make the Modal component work.

```js
// Import the library

import { Modal } from "modal-component-oc";

// return it from your components

return <Modal>{children}</Modal>;
```

## API

Below we have all the props that we can use with the `<Modal>` component. There are also some methods that can be used imperatively.

| Name                | Type        | Default        | Description                                                                                                                                                                                                                                                                                     |
| ------------------- | ----------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isOpen**          | `Boolean`   | `false`        | (Optional) Represents the display of component at the beginning. This props is optional. If it is not called, the component will take the default value false and won't be shown in project.                                                                                                    |
| **onClose**         | `Function`  | empty function | Callback trigger when the close zone has been clicked. The callback receives boolean variable as only parameter. Active this function will send a notification to close the Modal in the parent component. So that the parent component can know when the Modal closes and has suitable action. |
| **isCloseBtn**      | `Boolean`   | `true`         | (Optional) By default we have a close button with icon (X) at the top right corner of modal. This is optional props, if we dont want to show this button, let call this props and set it to false.                                                                                              |
| **backgroundColor** | `string`    | ``             | (Optional) Defines the background color of Modal. If we don't set this props, the modal background color will be white.                                                                                                                                                                         |
| **closeText**       | `string`    | ``             | (Optional) Defines the text that will be shown in the close button at the right top corlor of Modal.                                                                                                                                                                                            |
| **children**        | `ReactNode` |                | Define the content that will be shown in the Modal.                                                                                                                                                                                                                                             |

## Customize the Modal Appearance

It is possible to customize the way that the Modal is displayed:

```js
<Modal
	isOpen={true}
	onClose={() => setModalOpen(true)}
	isCloseBtn={true}
	closeText={"Close"}
	backgroundColor="lightgray"
	textColor="darkblue"
>
	<div>
		<h3>Employee Created!</h3>
		<p>
			You can go to
			<Link to={"/list"} className="link-text">
				here
			</Link>
			to review list of employee list
		</p>
	</div>
</Modal>
```

import { useState } from "react";
import Modal from "../lib/Modal";
import "./App.css";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onCloseHandler = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<Modal
				isOpen={isModalOpen}
				onClose={onCloseHandler}
				isCloseBtn={true}
				closeText={"Close"}
				backgroundColor={"red"}
			>
				<p>
					Employee Created!
					<span onClick={onCloseHandler} className="close-text">
						Close
					</span>
				</p>
			</Modal>
			<button onClick={() => setIsModalOpen(!isModalOpen)}>
				Open modal
			</button>
		</>
	);
}

export default App;

import { useCallback, useState } from "react";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [numbersAllowed, setNumbersAllowed] = useState(false);
	const [charactersAllowed, setCharactersAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numbersAllowed) str += "1234567890";
		if (charactersAllowed) str += "!@#$%^&*()_`-+{}[]";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass = str.charAt(char);
		}
		setPassword(pass);
	}, [length, numbersAllowed, charactersAllowed, setPassword]);

	return (
		<>
			<h1 className='text-center text-4xl'>Generate Your Password</h1>
			<div className='flex'>
				<div className='input-container'>
					<p className='bash-text'>
						<span className='user'>password</span>
						<span className='vm'>@passGenApp</span>:<span className='char'>~</span>$
					</p>
					<input className='input' placeholder='obtain password ' type='text' />
					<button className='button'>
						<span className='lable'>Retry</span>
						<svg
							className='svg-icon'
							fill='none'
							height={20}
							viewBox='0 0 20 20'
							width={20}
							xmlns='http://www.w3.org/2000/svg'>
							<g stroke='#ff342b' strokeLinecap='round' strokeWidth='1.5'>
								<path d='m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468' />
								<path d='m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986' />
							</g>
						</svg>
					</button>

					<button className='Btn'>
						<span className='text'>Copy</span>
						<span className='svgIcon'>
							<svg
								fill='white'
								viewBox='0 0 384 512'
								height='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z' />
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div className='opt-container'>
				<div className=' text-white slide-container'>
					<p>Length (8)</p>
					<input id='myRange' className='slider' defaultValue={50} max={100} min={0} type='range' />
				</div>
				<div className='radio-buttons-container'>
					<div className='radio-button'>
						<input name='radio-group' id='radio2' className='radio-button__input' type='radio' />
						<label htmlFor='radio2' className='radio-button__label'>
							<span className='radio-button__custom' />
							Numbers
						</label>
					</div>
					<div className='radio-button'>
						<input name='radio-group' id='radio1' className='radio-button__input' type='radio' />
						<label htmlFor='radio1' className='radio-button__label'>
							<span className='radio-button__custom' />
							Characters
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

import React, { ReactNode, MouseEvent, FormEvent } from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	children: ReactNode;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	children,
	className,
	onClick,
	onSubmit,
}) => {
	return (
		<div>
			<button
				type={type}
				className={className}
				onClick={onClick}
				onSubmit={onSubmit}>
				{children}
			</button>
		</div>
	);
};

export default Button;

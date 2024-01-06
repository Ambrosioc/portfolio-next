import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
	return (
		<div className={`${containerStyles}`}>
			<Image src={imgSrc} fill priority alt="Ambro Cazimira" />
		</div>
	);
};

export default DevImg;

import {useState} from "react";

const [selectedReadyToBuy, setSelectedReadyToBuy] = useState<boolean>(false);

const handleReadyToBuyChange = (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    setSelectedReadyToBuy(event.target.checked);
};

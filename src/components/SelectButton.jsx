import { styled } from "@mui/system";

const SelectButton = styled("span")(({ theme, selected }) => ({
  border: "1px solid gold",
  borderRadius: 5,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "Montserrat",
  cursor: "pointer",
  backgroundColor: selected ? "gold" : "",
  color: selected ? "black" : "",
  fontWeight: selected ? 700 : 500,
  "&:hover": {
    backgroundColor: "gold",
    color: "black",
  },
  width: "22%",
}));

const YourComponent = ({ children, selected, onClick }) => {
  return (
    <SelectButton selected={selected} onClick={onClick}>
      {children}
    </SelectButton>
  );
};

export default YourComponent;

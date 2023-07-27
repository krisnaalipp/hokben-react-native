import { Modal, Center, Text } from "native-base";
const ModalIngredients = ({ isOpen, onClose, ingredients, name }) => {
  return (
    <Center>
      <Modal
        isOpen={isOpen}
        onClose={() => onClose(true)}
        _backdrop={{
          _dark: {
            bg: "coolGray",
          },
          bg: "warmGray",
        }}
      >
        <Modal.Content maxWidth="100%" maxH="212">
          <Modal.Header alignItems={"center"} backgroundColor={"black"}>
            <Text color={"white"} bold fontSize={15}>
              Compositions
            </Text>
          </Modal.Header>
          <Modal.Body>
            {ingredients.length ? (
              ingredients.map((el) => {
                return <Text> - {el.name}</Text>;
              })
            ) : (
              <Text marginX={"auto"}>There's nothing here !</Text>
            )}
          </Modal.Body>
          <Modal.Footer>Chef : {name}</Modal.Footer>
          <Modal.CloseButton />
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalIngredients;

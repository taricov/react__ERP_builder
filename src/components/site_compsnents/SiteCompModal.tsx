import { Modal, ModalProps, useMantineTheme } from "@mantine/core";

const SiteCompModal = ({ opened, setOpened, children }: any) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={setOpened}
      overlayColor={theme.colors.dark[9]}
      centered
      withCloseButton={false}
      overlayOpacity={0.75}
      overlayBlur={0}
    >
      {children}
    </Modal>
  );
};

export default SiteCompModal;

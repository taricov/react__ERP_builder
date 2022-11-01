import {
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import SiteCompBtn from "../components/site_compsnents/SiteCompBtn";

const LoginPage = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid password",
    },
  });
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-around bg-white rounded-lg shadow-lg overflow-hidden mx-auto w-1/2 h-1/2">
        <Box className="flex flex-col items-center justify-center ">
          <Text className="font-bold text-4xl ">Login</Text>
          <Text className="text-md ">Access to your business</Text>
        </Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack mx="auto">
            <TextInput label="User Name" {...form.getInputProps("email")} />
            <PasswordInput
              label="Password"
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps("password")}
            />
          </Stack>
          <Group position="right" mt="md">
            <SiteCompBtn title="Login" type="submit" component={"button"} />
          </Group>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;

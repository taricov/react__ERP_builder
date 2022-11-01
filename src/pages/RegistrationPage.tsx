import {
  Box,
  Button,
  Checkbox,
  Grid,
  Group,
  Input,
  PasswordInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { SiteCompPasswordInput } from "../components/site_compsnents/SiteCompPasswordInput";

const registrationSchema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  bizName: z
    .string()
    .min(2, { message: "Business name should have at least 2 letters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Invalid Email" }),
  subdomain: z
    .string({ required_error: "Domain name is Required" })
    .min(5, { message: "Your domain should be 5 letters up" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(8, { message: "Invalid Password" }),
});

const RegistrationPage = () => {
  const form = useForm({
    initialValues: {
      name: "",
      bizName: "",
      email: "",
      subdomain: "",
      passowrd: "",
      confirmedPassword: "",
      termsOfService: false,
    },
    validate: zodResolver(registrationSchema),
  });

  const CountriesArray = fetch(
    "htttps://https://wft-geo-db.p.rapidapi.com/v1/geo/countries"
  ).then((res) => console.log(res));
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center mx-auto my-0 bg-gradient-to-r from-skin-hue2 to-skin-hue0  pt-10">
      <Box py={30}>
        <Text align="center" className="text-3xl font-bold text-gray-darkest">
          Registration
        </Text>
        <Text align="center" className="text-xl  text-gray-darkest">
          Create a new account!
        </Text>
      </Box>
      <Box sx={{ maxWidth: "70%" }} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid cols={2}>
            <TextInput
              classNames={{ input: "" }}
              withAsterisk
              label="Name"
              placeholder="Patrick Joe"
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              label="Business Name"
              placeholder="Joe"
              {...form.getInputProps("bizName")}
            />
          </SimpleGrid>
          <SimpleGrid cols={3}>
            <Select
              withAsterisk
              label="Country"
              placeholder="Search Countries"
              searchable
              nothingFound="No Country Found"
              data={["CountriesArray"]}
            />
            <TextInput
              withAsterisk
              label="Country"
              placeholder="USA"
              {...form.getInputProps("country")}
            />
            <TextInput
              withAsterisk
              label="City"
              placeholder="Manhanten"
              {...form.getInputProps("city")}
            />
            <TextInput
              label="Zip Code"
              placeholder="34723"
              {...form.getInputProps("zipCode")}
            />
          </SimpleGrid>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <SimpleGrid
            cols={2}
            className="flex items-start justify-center w-1/2"
          >
            <div className="w-full">
              <SiteCompPasswordInput />
            </div>
            <PasswordInput
              className="w-full"
              label="Confirm password"
              withAsterisk
            />
          </SimpleGrid>

          <Checkbox
            classNames={{
              input: "cursor-pointer",
              label: "cursor-pointer",
            }}
            description="By hitting Register that meana you agree to all Services Agreement about privacy and cookies."
            mt="md"
            size="xs"
            label="Terms and Conditions"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group position="right" mt="md">
            <Button
              className="bg-primary-600 hover:bg-primary-700 transition-all duration-trans text-white hover:text-white mt-5"
              type="submit"
            >
              Register
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default RegistrationPage;

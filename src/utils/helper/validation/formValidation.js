import * as yup from "yup";
import {
  NAME_REQUIRED,
  ADDRESS_REQUIRED,
  EMAIL_REQUIRED,
  CONTACT_REQUIRED,
} from "../../constants/validationSchema";
export const validateschema = yup.object().shape({
  name: yup.string().max(15).min(4).required(NAME_REQUIRED),
  address: yup.string().max(256).min(4).required(ADDRESS_REQUIRED),
  email: yup.string().email().required(EMAIL_REQUIRED),
  contact: yup.string().max(15).min(10).required(CONTACT_REQUIRED),
});

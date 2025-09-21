import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_SECRET);

export default resend;

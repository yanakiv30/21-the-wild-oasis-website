"use server";

import { auth, signIn, signOut } from "./auth";
export async function updateGuest(formdata) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
 
  const nationalID = formdata.get("nationalID");
  const [nationality, countryFlag] = formdata.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
      throw new Error("Please provide a valid national Id");
  const updateData = { nationality, countryFlag, nationalID };
  console.log("updateData from actions = ",updateData);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

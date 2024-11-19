"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();

  const createUser = useMutation(api.user.createUser);

  const checkUser = async () => {
    const result = await createUser({
      email: user.primaryEmailAddress.emailAddress,
      imageUrl: user.imageUrl,
      userName: user.fullName,
    });
    console.log(result);
  };

  useEffect(() => {
    user && checkUser();
  }, [user]);

  return (
    <div className="">
      <Button>Hello</Button>
      <UserButton />
    </div>
  );
}

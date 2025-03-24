import { Button } from "@/components/ui/button";

import React, { useState } from 'react';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Route, Routes } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const LoginForm = () => {
  
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  

  const navigate = useNavigate();

  function onSubmit(values) {
    
    const asyncOperation = new Promise((resolve) => {
      const username = values?.username;
      if ("krishna" === username) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: "Krishna",
            role: ["admin"],
            auth: true,
          })
        );
        resolve();
      } else{ 
        alert("Invalid User"); 
      }
    });

    asyncOperation.then(() => {
      navigate("/home");
    
    });
  }
  return (
    <>
      
      <div className="loginContainer">
      <div style={{width:"50%"}}>
        <h1>This is my Portfolio Project</h1>
        <h1>Madarasu Siva Rama Krishna</h1>
      </div>
      <div  style={{width:"50%"}}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username(krishna)</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>Your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        
        </form>
      </Form>
      </div>
      </div> 
      
    </>
  );
};

export default LoginForm;

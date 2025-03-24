import { Button } from "@/components/ui/button";
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


function Logout() {
    const navigate = useNavigate();
    const logoutForm = () => {
        navigate("/loginForm");
    };
    return ( 
     <>
      <button onClick={logoutForm} className="logout-button">Logout</button>
     </>
    );

}
export default Logout;
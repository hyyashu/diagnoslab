import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CallbackForm from "./CallbackForm";

const AutoOpenDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Looking to Book a Test?</DialogTitle>
          <DialogDescription>
            Please share your details, our health advisor will call you or you
            can call us at +91 8404802201 / 8404802214.!
          </DialogDescription>
          <CallbackForm ShowTitle="" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AutoOpenDialog;

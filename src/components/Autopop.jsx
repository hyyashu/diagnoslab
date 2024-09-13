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
          <DialogTitle className="text-green-600">
            Looking to Book a Test?
          </DialogTitle>
          <DialogDescription className="text-balance">
            Please share your details, our health advisor will call you or you
            can call us at{" "}
            <a className="font-bold" href="tel:+918404802201">
              +91 8404802201{" "}
            </a>
            /
            <a className="font-bold" href="tel:+918404802214">
              {" "}
              8404802214
            </a>
            !
          </DialogDescription>
          <CallbackForm ShowTitle="" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AutoOpenDialog;

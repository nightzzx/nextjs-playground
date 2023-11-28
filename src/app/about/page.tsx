"use client";

import * as React from "react";
import { Toaster, toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AboutPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />

      <ModeToggle />

      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>

      <Toaster expand={true} closeButton richColors position="top-center" />

      <Button
        onClick={() =>
          toast.success("Dear xx", {
            description: "Payment successful",
          })
        }
      >
        Give me a toast
      </Button>
    </>
  );
}

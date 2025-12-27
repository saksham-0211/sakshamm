import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 500) {
           const error = api.contact.submit.responses[500].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error('Failed to submit message');
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "TRANSMISSION SENT",
        description: "Your message has been uploaded to the grid.",
        className: "border-primary text-primary font-mono uppercase bg-black",
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION ERROR",
        description: error.message,
        variant: "destructive",
        className: "font-mono uppercase bg-black",
      });
    }
  });
}

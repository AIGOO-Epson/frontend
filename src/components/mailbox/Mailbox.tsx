import MailList from "./MailList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Mailbox() {
  return (
    <Tabs defaultValue="received" className="w-full h-full scrollon innerheight">
      <TabsList className="w-full h-10 ">
        <TabsTrigger value="received">Received Letters</TabsTrigger>
        <TabsTrigger value="sent">Sent Letters</TabsTrigger>
      </TabsList>
      <TabsContent value="received">
        <MailList object="received" />
      </TabsContent>
      <TabsContent value="sent">
        <MailList object="sent" />
      </TabsContent>
    </Tabs>
  );
}

export default Mailbox;

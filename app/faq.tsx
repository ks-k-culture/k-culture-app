import { useState } from "react";
import { ScrollView } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";
import { FAQ_DATA } from "@/constants/data";

export default function FAQScreen() {
  const [expandedId, setExpandedId] = useState<string | undefined>(undefined);

  return (
    <ScreenWrapper>
      <Header title="자주묻는질문" />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <Accordion type="single" collapsible value={expandedId} onValueChange={setExpandedId} className="gap-3">
          {FAQ_DATA.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="bg-gray-900 rounded-xl overflow-hidden">
              <AccordionTrigger className="px-5 py-5">
                <Text className="text-white flex-1 mr-4">{item.question}</Text>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4">
                <Text className="text-gray-400">{item.answer}</Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollView>
    </ScreenWrapper>
  );
}

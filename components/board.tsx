import { Text, List, ThemeIcon, rem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

interface BoardProps {
  title: string;
}

export function Board({ title, children }: PropsWithChildren<BoardProps>) {
  return (
    <div className="max-w-xl h-fit border border-gray-200 hover:border-blue-400 hover:shadow-sm rounded-xl p-4 flex flex-col items-center gap-4 transition-all">
      <Text fw={900}>
        <span className=" text-xl md:text-2xl">{title}</span>
      </Text>
      <div className="w-full items-start">
        <List
          spacing="lg"
          size="md"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck
                style={{ width: rem(12), height: rem(12) }}
                stroke={3.5}
              />
            </ThemeIcon>
          }
        >
          {children}
        </List>
      </div>
    </div>
  );
}

"use client";

import { LetterDetailInfo } from "@/lib/types/mailDetailTypes";
import { formatDate } from "@/lib/util/utilFunctions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import CustomDialog from "@/components/common/CustomDialog";
import { IMAGE_BASE_URL, NO_TOOL_BAR } from "@/lib/constants/constants";
import Image from "next/image";

interface MailDescriptionProps {
  letterInfoData: LetterDetailInfo | undefined;
  letterImageUrl?: string | undefined;
  dialog?: boolean;
}

function MailDescription({ letterInfoData, letterImageUrl, dialog = true }: MailDescriptionProps) {
  const imageURL = IMAGE_BASE_URL + letterImageUrl + NO_TOOL_BAR;

  const renderImage = (url: string) => {
    if (imageURL.includes("pdf")) {
      return <iframe src={url} width={"100%"} height={"100%"} />;
    }
    return <Image src={url} alt="" fill />;
  };

  return (
    <div className="w-full flex flex-col gap-y-1">
      <p className="font-bold text-[22px] text-text-sub">{letterInfoData?.title}</p>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-y-1">
          <p className="font-medium text-text-info">from.{letterInfoData?.sender.username}</p>
          <p className="text-xs text-text-disabled">{letterInfoData && formatDate(letterInfoData?.createdAt)}</p>
        </div>
        {dialog && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="bg-primary-8 font-bold text-xs px-2 h-[32px]">
                Original Letter
              </Button>
            </DialogTrigger>
            <CustomDialog title="Original Letter">
              <div className="relative h-full">{renderImage(imageURL)}</div>
            </CustomDialog>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default MailDescription;

"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Note from "@/models/note";
import { PlusIcon, TrashIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FormButton from "@/components/form-button";

const DashboardPage = () => {
  const notes: Note[] = [
    {
      _id: "1",
      title: "Note 1",
      completed: false,
    },
    {
      _id: "2",
      title: "Note 2",
      completed: false,
    },
    {
      _id: "3",
      title: "Note 3",
      completed: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex gap-10 max-w-screen-lg w-11/12 mx-auto py-5">
        <Sidebar />
        <div className="flex flex-col gap-10 w-full">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">Notes</h1>
              <h2 className="text-xl text-slate-500">
                Create and manage posts.
              </h2>
            </div>

            <FormButton>
              <PlusIcon className="w-4 h-4 mr-2" />
              New Note
            </FormButton>
          </div>

          <div>
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface NoteItemProps {
  note: Note;
}

const NoteItem = ({ note }: NoteItemProps) => {
  const [dialog, setDialog] = React.useState<boolean>(false);

  console.log(dialog);

  return (
    <>
      <div className="flex items-center justify-between border w-full px-5 py-5">
        <h1 className="font-bold text-lg">{note.title}</h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg viewBox="0 0 128 512" fill="currentColor" className="w-4 h-4">
              <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104c0 30.9-25.1 56-56 56S8 126.9 8 96s25.1-56 56-56 56 25.1 56 56z" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-500"
              onClick={() => setDialog(true)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <NoteItemDialog dialog={dialog} setDialog={setDialog} />
    </>
  );
};

interface NoteItemDialogProps {
  dialog: boolean;
  setDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteItemDialog = ({ dialog, setDialog }: NoteItemDialogProps) => {
  return (
    <>
      {dialog && (
        <div className="fixed flex items-center justify-center inset-0 backdrop-blur-sm" />
      )}
      <Dialog open={dialog} onOpenChange={() => setDialog(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this post?
            </DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
            <DialogFooter>
              <FormButton
                type="button"
                variant={"secondary"}
                onClick={() => setDialog(false)}
              >
                Cancel
              </FormButton>
              <FormButton type="submit" variant={"destructive"}>
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </FormButton>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardPage;

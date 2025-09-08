import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

interface AddExpenseModalProps  {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({
  opened,
  onClose,
  onAdd,
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim || !amount || !category?.trim) return ;
      onAdd(name, amount, category) ;
      setName("");
      setAmount(0);
      setCategory(null);
      onClose();
    
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
   let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
  <Modal opened={opened} onClose={onClose} title="Add Expense Item">
      <Stack>
        <TextInput
      label="Name"
      description="Input description"
      error={!name.trim() &&"Expense Name is  required"}
      placeholder="Input placeholder"
      value={name}
      onChange={(e) => setName(e.currentTarget.value)}
      /> 
       <NumberInput
      label="Number Input"
      description="Input description"
      error={!amount &&"Amount is  required"}
      placeholder="Input placeholder"
      value={amount}
      onChange={(val) => setAmount(val ?? 0)}
    />
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['Food', 'Transport','Entertainment' ]}
      error={!category &&"Category is  required"}
      value={category}
      onChange={(val) => setCategory(val)}
    />
      <Button onClick={handleSubmit}>Add Expense</Button>
      
      </Stack>
  </Modal>
  );
}

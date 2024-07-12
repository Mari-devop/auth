export interface FormProps {
    children?: React.ReactNode;
    text: string;
    onSubmit: (e: React.FormEvent) => void;
}
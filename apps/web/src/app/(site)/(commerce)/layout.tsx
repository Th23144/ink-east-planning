import { CommerceShell } from "@/components/commerce/CommerceShell";

export default function CommerceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <CommerceShell>{children}</CommerceShell>;
}

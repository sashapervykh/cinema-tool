import { DisplayTitle, Spacing } from "@vkontakte/vkui";

export function PageTitle({ title }: { title: string }) {
  return (
    <>
      <DisplayTitle align="center">{title}</DisplayTitle>
      <Spacing size="2xl" />
    </>
  );
}

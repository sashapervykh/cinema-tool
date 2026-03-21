import { Flex, Headline, Paragraph, Slider, Spacing } from "@vkontakte/vkui";

interface Props {
  title: string;
  value: [number, number];
  min: number;
  max: number;
  step: number;
}

export function RangeSlider({ title, min, max, step, value }: Props) {
  return (
    <Flex direction="column">
      <Headline>{title}</Headline>
      <Spacing size="m" />
      <Slider value={value} min={min} max={max} step={step} multiple withTooltip />
      <Spacing size="m" />
      <Flex justify="space-between">
        <Paragraph>{value[0]}</Paragraph>
        <Paragraph align="end">{value[1]}</Paragraph>
      </Flex>
      <Spacing size="l" />
    </Flex>
  );
}

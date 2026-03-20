import { Flex, Link, Paragraph } from "@vkontakte/vkui";
import style from "./AppFooter.module.css";

export function AppFooter() {
  return (
    <footer>
      <Flex justify="center" align="center" className={style.footer}>
        <Paragraph align="center">
          Сделано <Link href="https://github.com/sashapervykh">Сашей Первых</Link>
        </Paragraph>
      </Flex>
    </footer>
  );
}

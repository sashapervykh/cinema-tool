import { Checkbox, Flex, Tooltip } from "@vkontakte/vkui";
import styles from "./CompareCheckbox.module.css";
import { useState } from "react";

export function CompareCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Tooltip description="Сравнить" placement="right">
      <Flex className={styles["compare-checkbox"]}>
        <Checkbox
          checked={checked}
          onChange={() => {
            console.log("change");
            setChecked((c) => !c);
          }}
        />
      </Flex>
    </Tooltip>
  );
}

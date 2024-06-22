import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


import { SideBlock } from "./SideBlock";

export const TagsBlock = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="Что вы можете публиковать?">
      
      <List>
        <ListItem >
          <p><b>1. </b>Ваши идеи для будущих моделей (это могут быть концепты, рисунки или подробное описание)</p>
        </ListItem>

        <ListItem >
        <p><b>2. </b>Комментарии (включающие: оценку работы сайта, качество товара, проблемы с доставкой и т.д.)</p>
        </ListItem>

        <ListItem >
        <p><b>3. </b>Новости из мира умных технологий для дома (такие как: умный дом, новые открытия и т.д.)</p>
        </ListItem>

        <ListItem >
        <p><b>4. </b>Шутки, мемы и остальное для поднятия всем настроения :)</p>
        </ListItem>
      </List>
    </SideBlock>
  );
};

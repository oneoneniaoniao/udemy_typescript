import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";
import {memo,  VFC} from "react";

type Props = {
  // ()=>voidは引数なし返却値なしの関数という意味
 onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props)=>{
  const {onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting, onClickLogout} = props
  return(
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" onClick={onClickHome}>Top</Button>
          <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
          <Button w="100%" onClick={onClickSetting}>設定</Button>          <Button w="100%" onClick={onClickLogout}>ログアウト</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  )
})
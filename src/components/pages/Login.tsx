import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";

import {PrimaryButton} from "../atoms/button/PrimaryButton"

export const Login: VFC = memo(()=>{
  const { login, loading} = useAuth();
  const [userId, setUserId] = useState("")


  const onChangeUserId = (e:ChangeEvent<HTMLInputElement>)=> setUserId(e.target.value)

  const onClickLogin = () => login(userId)

  return(
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        {/* スタックは囲った中身を等間隔に配置していく */}
        <Stack spacing={4} py={4} px={10}>
        <Input placeholder="userID" value={userId} onChange={onChangeUserId}/>
        <PrimaryButton disabled={userId===""} loading={loading} onClick={onClickLogin}>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
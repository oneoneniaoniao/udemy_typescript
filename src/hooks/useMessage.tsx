import {useCallback} from "react"
import {useToast} from "@chakra-ui/react"

export const useMessage = () => {
  type Props = {
    title:string;
    status: "info" | "warning" | "success" | "error"
  }
  const toast = useToast();
  const showMessage = useCallback((props: Props)=>{
    const {title, status} = props;
    toast({ 
      title,
      status,
      position:"top", 
      duration: 2000,
      isClosable: true,
    })
  },[toast])
  return {showMessage}
}
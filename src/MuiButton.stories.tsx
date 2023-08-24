
import type {Meta,StoryObj} from "@storybook/react"
import { MuiBtn } from ".";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

/** Buttons allow users to take actions, and make choices, with a single tap */
const meta:Meta<typeof MuiBtn>={
   
    title:'Inputs/Button',
    component:MuiBtn,
    tags:['autodocs'],
    argTypes:{
        color:{
          description:'The color of the component',
          control:{type:'select'},
          options:[	'inherit', 'primary','secondary','success','error','info','warning'],
          table: {
            defaultValue: { summary: 'primary' }
        }
        },
        variant:{
            description: "contained | outlined | text",
            control:{type:'select'},
            options:["contained","outlined","text"],
            table: {
                defaultValue: { summary: 'text' }
            }
            
        },
        fullWidth:{
            description:'If true, the button will take up the full width of its container.',
            control:{type:'boolean'},
            table: {
                defaultValue: { summary: 'false' }
            }
            },
        disabled:{
        description:'If true, the component is disabled.',
        control:{type:'boolean'},
        table: {
            defaultValue: { summary: 'false' }
        }
       
        },
        disableElevation:{
        description:'If true, no elevation is used.',
        control:{type:'boolean'},
        table: {
            defaultValue: { summary: 'false' }
        }
        },
        disableFocusRipple:{
         description:'If true, the keyboard focus ripple is disabled.',
         control:{type:'boolean'},
         table: {
            defaultValue: { summary: 'false' }
        }
        },
        disableRipple:{
        description:'If true, the ripple effect is disabled.⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.',
        control:{type:'boolean'},
        table: {
            defaultValue: { summary: 'false' }
        }
        },
        children:{
            description: "The content to render within the button", 
        },
        classes:{
           description:'Override or extend the styles applied to the component',
           
        },
        component:{
         description:'The component used for the root node. Either a string to use a HTML element or a component.'
        },
        endIcon:{
        description:'Element placed after the children.'
        },
        href:{
        description:'The URL to link to when the button is clicked. If defined, an a element will be used as the root node.'
        },
        size:{
            description:'The size of the component'
        },
        startIcon:{
        description:'Element placed before the children.'
        },
        sx:{
        description:'The system prop that allows defining system overrides as well as additional CSS styles'
        },
        
    },
}



export default meta;

type Story=StoryObj<typeof MuiBtn>;


/** Base Button */

export const Base:Story={
    args:{
        children:'Basic Button'
    },
}

 /** The Button comes with three variants: text (default), contained, and outlined. */
  export const BasicButtons:Story={
    render: ()=>(
     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:150}}>
     <MuiBtn variant='contained'children='primary'/>
     <MuiBtn variant='outlined'children='secondary'/>
     <MuiBtn variant='text'children='teritary'/>
     </div>
    ),
    
  }
  /**Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app. */
export const Contained:Story={
    args:{
        variant:'contained',
        children:'contained'
    }
}
/**Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app
 */
export const Outlined:Story={
    args:{
        variant:"outlined",
        children:'outlined'
    }


}
/**Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content. */
export const Text:Story={
    args:{
        variant:"text",
        children:'text'
    }
    
}

/**Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize 
 * logos more easily than plain text. For example(Start Icon), if you have a delete button you can label it with a dustbin icon. */
export const ButtonsWithIconsAndLabelsStarticon:Story={
    args:{
        children:'delete',
        startIcon:<DeleteIcon/>,
        variant:'outlined'
 }


}

/**An example with EndIcon */
export const ButtonsWithIconsAndLabelsEndicon:Story={
    
    args:{
        children:'send',
        endIcon:<SendIcon/>,
        variant:'contained'

 }


}

   

export const Playground: Story = {
  args: { children: "Button text", color: "primary", variant: "contained" },
};

import { useEffect, useState } from "react";
import Divider from "./Divider";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { mergeRegister } from "@lexical/utils";
import { $createHeadingNode } from "@lexical/rich-text";
import { $wrapNodes } from "@lexical/selection";
import { useKeyBindings } from "@/app/hooks/useKeyBindings";
import {
  HEADINGS,
  LOW_PRIORITY,
  RichTextAction,
  RICH_TEXT_OPTIONS,
} from "./constant";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [disableMap, setDisableMap] = useState({
    [RichTextAction.Undo]: true,
    [RichTextAction.Redo]: true,
  });
  const [selectionMap, setSelectionMap] = useState({});

  const updateToolbar = () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const newSelectionMap = {
        [RichTextAction.Bold]: selection.hasFormat("bold"),
        [RichTextAction.Italics]: selection.hasFormat("italic"),
        [RichTextAction.Underline]: selection.hasFormat("underline"),
        [RichTextAction.Strikethrough]: selection.hasFormat("strikethrough"),
        [RichTextAction.Superscript]: selection.hasFormat("superscript"),
        [RichTextAction.Subscript]: selection.hasFormat("subscript"),
        [RichTextAction.Code]: selection.hasFormat("code"),
        [RichTextAction.Highlight]: selection.hasFormat("highlight"),
      };
      setSelectionMap(newSelectionMap);
    }
  };

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (payload) => {
          updateToolbar();
          return false;
        },
        LOW_PRIORITY
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setDisableMap((prevDisableMap) => ({
            ...prevDisableMap,
            [RichTextAction.Undo]: !payload,
          }));
          return false;
        },
        LOW_PRIORITY
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setDisableMap((prevDisableMap) => ({
            ...prevDisableMap,
            [RichTextAction.Redo]: !payload,
          }));
          return false;
        },
        LOW_PRIORITY
      )
    );
  }, [editor]);

  const onAction = (id) => {
    switch (id) {
      case RichTextAction.Bold:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        break;
      case RichTextAction.Italics:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        break;
      case RichTextAction.Underline:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        break;
      case RichTextAction.Strikethrough:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        break;
      case RichTextAction.Superscript:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
        break;
      case RichTextAction.Subscript:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
        break;
      case RichTextAction.Highlight:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "highlight");
        break;
      case RichTextAction.Code:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        break;
      case RichTextAction.LeftAlign:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        break;
      case RichTextAction.RightAlign:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        break;
      case RichTextAction.CenterAlign:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        break;
      case RichTextAction.JustifyAlign:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        break;
      case RichTextAction.Undo:
        editor.dispatchCommand(UNDO_COMMAND, undefined);
        break;
      case RichTextAction.Redo:
        editor.dispatchCommand(REDO_COMMAND, undefined);
        break;
      default:
        break;
    }
  };

  useKeyBindings({ onAction });

  const getSelectedBtnProps = (isSelected) =>
    isSelected ? "bg-blue-500 text-white" : "";

  const updateHeading = (heading) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createHeadingNode(heading));
      }
    });
  };

  return (
    <div className="flex bg-primary gap-4">
      <div className="flex items-center">
        <select
          className="mr-2 m-2 p-1 text-xs border border-gray-300 rounded"
          onChange={(e) => {
            updateHeading(e.target.value);
          }}
        >
          {HEADINGS.map((heading, index) => (
            <option className="font-bold" key={index} value={heading}>
              {heading}
            </option>
          ))}
        </select>
        {RICH_TEXT_OPTIONS.map(({ id, index, label, icon, fontSize }) => (
          <button
            key={id}
            aria-label={label}
            className={`p-1 text-sm ${getSelectedBtnProps(selectionMap[id])}`}
            style={{ fontSize: fontSize }}
            onClick={() => onAction(id)}
            disabled={disableMap[id]}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

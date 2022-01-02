/**
* TodoListPanel.tsx
* Copyright: Microsoft 2018
*
* Display first screen of the Todo application.
*/

import * as _ from 'lodash';
import * as RX from 'reactxp';
import { VirtualListView, VirtualListViewItemInfo } from 'reactxp-virtuallistview';
import { VirtualListCellRenderDetails } from 'reactxp-virtuallistview/dist/VirtualListCell';
import { ComponentBase } from 'resub';
import { Colors, Fonts, FontSizes } from '../app/Styles';

import { Todo } from '../models/TodoModels';
import TodosStore from '../stores/TodosStore';

import TodoListItem2 from './TodoListItem2';

interface TodoListItemInfo extends VirtualListViewItemInfo {
    todo: Todo;
}

export interface TodoListPanelProps extends RX.CommonProps {
    selectedTodoId?: string;
    len: string;
    showSideMenu: boolean;
    onSelect: (selectedId: string) => void;
    onCreateNew: () => void;
}

interface TodoListPanelState {
    todos: TodoListItemInfo[];
    filteredTodoList: TodoListItemInfo[];
    searchString: string;
}

const _listItemHeight = 44;

const _styles = {
    listScroll: RX.Styles.createViewStyle({
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#1F293D',
    }),
    todoListHeader: RX.Styles.createViewStyle({
        height: 60,
        borderBottomWidth: 1,
        borderColor: Colors.borderSeparator,
        flexDirection: 'row',
        alignItems: 'center',
    }),
    searchBox: RX.Styles.createTextInputStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size14,
        borderWidth: 1,
        borderColor: Colors.borderSeparator,
        flex: 1,
        padding: 4,
        marginLeft: 12,
    }),
    container: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1F293D',
    }),
    addTodoButton: RX.Styles.createViewStyle({
        margin: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size14,
        color: "white",
    }),
    buttonText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size32,
        lineHeight: 32,
        color: Colors.buttonTextColor,
    }),
    buttonTextHover: RX.Styles.createTextStyle({
        color: "#01012A",
    }),
};

import * as UI from '@sproutch/ui';

import ImageSource from 'modules/images';
export default class TodoListPanel2 extends ComponentBase<TodoListPanelProps, TodoListPanelState> {
    protected _buildState(props: TodoListPanelProps, initState: boolean): Partial<TodoListPanelState> | undefined {
        const partialState: Partial<TodoListPanelState> = {
        };

        partialState.todos = TodosStore.getTodos2().map((todo, i) => ({
            key: i.toString(),
            height: _listItemHeight,
            template: 'todo',
            todo,
        }));

        if (initState) {
            partialState.searchString = '';
            partialState.filteredTodoList = partialState.todos;
        } else {
            const filter = _.trim(partialState.searchString);
            if (filter) {
                partialState.filteredTodoList = this._filterTodoList(partialState.todos, filter);
            } else {
                partialState.filteredTodoList = partialState.todos;
            }
        }

        return partialState;
    }

    render() {
        return (
            <RX.View useSafeInsets={true} style={_styles.container}>
                <RX.View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 25, marginBottom: 40 }}>
                    <RX.Image resizeMethod={'auto'} resizeMode={'contain'} style={{ width: 40, height: 40 }} source={ImageSource.logo2}></RX.Image>
                    <RX.Text style={[{ marginLeft: 5 }, _styles.label]}>
                        {'Clifford Inu Dapp'}
                    </RX.Text>
                </RX.View>
                <VirtualListView
                    itemList={this.state.filteredTodoList}
                    renderItem={this._renderItem}
                    style={_styles.listScroll}
                />
                <UI.Button onPress={() => RX.Linking.openUrl('https://app.uniswap.org/#/swap?outputCurrency=0x1b9baf2a3edea91ee431f02d449a1044d5726669')} style={{ content: [{ width: 200, marginBottom: 40, borderRadius: 7, backgroundColor: "#E60929", borderColor: "#E60929" }], label: _styles.label }
                } elevation={4} variant={"outlined"} label="BUY $CLIFF" />
            </RX.View>
        );
    }

    private _onPressModal = (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();
    }
    private _filterTodoList(sortedTodos: TodoListItemInfo[], searchString: string): TodoListItemInfo[] {
        const lowerSearchString = searchString.toLowerCase();

        return _.filter(sortedTodos, item => {
            const todoLower = item.todo.text.toLowerCase();
            return todoLower.search(lowerSearchString) >= 0;
        });
    }

    private _renderItem = (details: VirtualListCellRenderDetails<TodoListItemInfo>) => {
        const item = details.item;
        return (
            <TodoListItem2
                lenguage={this.props.len}
                showSideMenu={this.props.showSideMenu}
                todo={item.todo}
                height={_listItemHeight}
                isSelected={item.todo.id === this.props.selectedTodoId}
                searchString={this.state.searchString}
                onPress={this._onPressTodo}
            />
        );
    };

    private _onPressTodo = (todoId: string) => {
        this.props.onSelect(todoId);
        this.setState({
            searchString: '',
            filteredTodoList: this.state.todos,
        });
    };

}

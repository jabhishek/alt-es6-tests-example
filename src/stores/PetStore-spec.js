import alt from 'MyAlt';
// wrappedPetStore is alt store, UnwrappedPetStore is UnwrappedPetStore class
import wrappedPetStore, {UnwrappedPetStore} from 'stores/PetStore';
import petActions from 'actions/PetActions';
 // you can use any assertion library you want

describe('PetStore', () => {
  it('listens for buy a pet action', () => {
    // get initial state of store
    var oldRevenue = wrappedPetStore.getState().revenue;

    // create action to be dispatched
    var data = {cost: 10.223, pet: 'dogs'},
        action = petActions.BUY_PET;

    // dispatch action (store is listening for action)
    // NOTE: FB's dispatcher expects keys "action" and "data"
    alt.dispatcher.dispatch({action, data});

    // assertions
    expect(wrappedPetStore.getState().revenue).toEqual(oldRevenue - 10.22);
  });
});

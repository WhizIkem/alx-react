import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { fetchCourses } from "./courseActionCreators";
import { SET_COURSES, FETCH_COURSES } from "./courseActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("courseActionCreators", () => {
  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  });

  it("selectCourse returns the correct action", () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("unSelectCourse returns the correct action", () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  it('should dispatch FETCH_COURSES and SET_COURSES when fetching courses', (done) => {
    const store = mockStore();
    const mockResponse = {
      data: [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
      ],
    };

    // Mock the API request
    moxios.stubRequest('/dist/courses.json', {
      status: 200,
      response: mockResponse,
    });

    store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();

      // Check if FETCH_COURSES and SET_COURSES were dispatched
      expect(actions).toEqual([
        { type: FETCH_COURSES },
        { type: SET_COURSES, data: mockResponse.data },
      ]);

      done();
    });
  });
});

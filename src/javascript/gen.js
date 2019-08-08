"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gen(length) {
    let retValue = "";
    let integers = '0123456789';
    let chars = integers.length;
    for (let i = 0; i < length; i++) {
        retValue += integers.charAt(Math.floor(Math.random() * chars));
    }
    return retValue;
}
exports.gen = gen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHlwZXNjcmlwdC9nZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixHQUFHLENBQUMsTUFBTTtJQUVwQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDO0lBQzVCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFFNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBQ25FO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDdEIsQ0FBQztBQVhELGtCQVdDIn0=
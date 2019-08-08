export function gen(length) { 
      
      let retValue = "";
      let integers = '0123456789';
      let chars = integers.length;

      for (let i = 0; i < length; i++) {
            retValue += integers.charAt(Math.floor(Math.random() * chars))
      }

      return retValue;
}
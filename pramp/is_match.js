/*
Basic Regex Parser
Implement a regular expression function isMatch that supports the '.' and '*' symbols. The function receives two strings - text and pattern - and should return true if the text matches the pattern as a regular expression. For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

In case you aren't familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.' is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter (see fourth and fifth examples). 
*/
function isMatch(text, pattern) {
    return isMatchHelper(text, pattern, 0, 0)
  }
  
  function isMatchHelper(text, pattern, textIndex, patIndex){
      // base cases - one of the indexes reached the end of text or pattern
      if (textIndex >= text.length)
          if (patIndex >= pattern.length)
              return true
          else
              if (((patIndex+1) < pattern.length) && (pattern[patIndex+1] == '*'))
                  return isMatchHelper(text, pattern, textIndex, patIndex + 2)
              else
                  return false
  
      else if ((patIndex >= pattern.length) && (stextIndex < text.length))
          return false
  
      // string matching for character followed by '*'
      else if (((patIndex+1) < pattern.length) && (pattern[patIndex+1] == '*'))
          if ((pattern[patIndex] == '.') || (text[textIndex] == pattern[patIndex]))
              return (isMatchHelper(text, pattern, textIndex, patIndex + 2) ||
                      isMatchHelper(text, pattern, textIndex + 1, patIndex))
          else
              return isMatchHelper(text, pattern, textIndex, patIndex + 2)
  
      // string matching for '.' or ordinary char.
      else if ((pattern[patIndex] == '.') ||
              (pattern[patIndex] == text[textIndex]))
          return  isMatchHelper(text, pattern, textIndex + 1, patIndex + 1)
      
      return false
  }